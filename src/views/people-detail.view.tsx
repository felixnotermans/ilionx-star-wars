import React, { useCallback, useEffect, useMemo, useState } from "react";
import PageComponent from "../components/page/page.component";
import FlexComponent from "../components/flex/flex.component";
import PageBodyComponent from "../components/page-body/page-body.component";
import { peopleService } from "../services/people.service";
import IPeople from "../common/interfaces/people.interface";
import LoadingIndicatorComponent from "../components/loading-indicator/loading-indicator.component";
import { useParams } from "react-router-dom";
import IFilm from "../common/interfaces/film.interface";
import RowComponent from "../components/row/row.component";

const PeopleDetailView = () => {
  const { peopleId } = useParams();
  const [isFetching, setIsFetching] = useState(false);
  const [person, setPerson] = useState<IPeople>();
  const [films, setFilms] = useState<IFilm[]>();

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        setIsFetching(true);
        if (!peopleId) {
          throw Error();
        }
        const response = await peopleService.get(peopleId);
        setPerson(response);
      } catch {
        console.error("Something went wrong");
      } finally {
        setIsFetching(false);
      }
    };

    fetchPerson();
  }, [peopleId]);

  useEffect(() => {
    if (!person) {
      return;
    }

    const fetchFilms = async () => {
      try {
        const films = await Promise.all(
          person.films.map(async (filmUrl) => (await fetch(filmUrl)).json())
        );

        setFilms(films);
      } catch {
        console.error("Something went wrong");
      }
    };

    fetchFilms();
  }, [person]);

  const memoizedFilms = useMemo(() => {
    const filmsWithReleaseDate = films?.map((film) => `${film.title} (${film.release_date})`);
    return filmsWithReleaseDate?.join(", ");
  }, [films]);

  return (
    <PageComponent>
      <PageBodyComponent>
        <h1>Character detail</h1>
        {isFetching === true && <LoadingIndicatorComponent />}
        {person && (
          <FlexComponent gap={15} flexDirection="column">
            <RowComponent label={"Name"} value={person.name} />
            <RowComponent label={"Gender"} value={person.gender} />
            <RowComponent label={"Birth year"} value={person.birth_year} />
            {memoizedFilms && <RowComponent label={"Films"} value={memoizedFilms} />}
          </FlexComponent>
        )}
      </PageBodyComponent>
    </PageComponent>
  );
};

export default PeopleDetailView;
