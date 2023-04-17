import React, { useCallback, useMemo, useState } from "react";
import PageComponent from "../components/page/page.component";
import FlexComponent from "../components/flex/flex.component";
import PageBodyComponent from "../components/page-body/page-body.component";
import { peopleService } from "../services/people.service";
import IPeople from "../common/interfaces/people.interface";
import { usePagination } from "../common/hooks/use-pagination.hook";
import PersonCardTemplate from "../templates/person-card.template";
import LoadingIndicatorComponent from "../components/loading-indicator/loading-indicator.component";
import ButtonComponent from "../components/button/button.component";
import { useNavigate } from "react-router-dom";
import getUrlId from "../common/utils/get-url-id.utils";
import PlanetCardTemplate from "../templates/planet-card.template";
import { planetService } from "../services/planet.service";
import IPlanet from "../common/interfaces/planet.interface";
import InputComponent from "../components/input/input.component";

const PlanetsView = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const memoizedSearchOptions = useMemo(() => ({ search: searchValue ?? "" }), [searchValue]);

  const { fetchNextItems, items, isFetching, hasReachedLimit } = usePagination<IPlanet>({
    fetchMethod: planetService.getAll,
    searchOptions: memoizedSearchOptions
  });

  const handleOnInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  }, []);

  return (
    <PageComponent>
      <PageBodyComponent>
        <h1>Planets</h1>
        <FlexComponent flexDirection="column">
          <FlexComponent justifyContent="flex-start" flex={1}>
            <InputComponent
              attributes={{ placeholder: "Search for name", onChange: handleOnInputChange }}
            />
          </FlexComponent>
          <FlexComponent>
            {items.map((item) => (
              <PlanetCardTemplate key={item.name} planet={item} />
            ))}
          </FlexComponent>
        </FlexComponent>

        {isFetching === true && <LoadingIndicatorComponent />}

        <FlexComponent justifyContent="center">
          {isFetching === false && hasReachedLimit === false && (
            <ButtonComponent
              attributes={{ onClick: () => fetchNextItems(), style: { margin: 10 } }}
            >
              Load more
            </ButtonComponent>
          )}
        </FlexComponent>
      </PageBodyComponent>
    </PageComponent>
  );
};

export default PlanetsView;
