import React, { useCallback } from "react";
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

const PeopleView = () => {
  const navigate = useNavigate();
  const { fetchNextItems, items, isFetching, hasReachedLimit } = usePagination<IPeople>({
    fetchMethod: peopleService.getAll
  });

  /** Handles card click by navigating to the detailed view */
  const handleOnClick = (person: IPeople) => {
    const personId = getUrlId(person.url, "people");
    navigate({ pathname: `/people/${personId}` });
  };

  return (
    <PageComponent>
      <PageBodyComponent>
        <h1>Characters</h1>
        <FlexComponent>
          {items.map((item) => (
            <PersonCardTemplate key={item.name} person={item} onClick={() => handleOnClick(item)} />
          ))}
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

export default PeopleView;
