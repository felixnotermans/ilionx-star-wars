import { useCallback, useEffect, useState } from "react";
import IPaginatedResponse from "../interfaces/paginated-response.interface";

type ReturnType<DataType> = {
  /**
   * All items fetched in pagination
   */
  items: DataType[];
  /**
   * Whenever called it will fetch the next items
   */
  fetchNextItems: () => void;
  /**
   * Will be true whenever the maximum amount of fetched items is reached
   */
  hasReachedLimit: boolean;

  /**
   * Will be true whenever hook is busy fetching next items
   */
  isFetching: boolean;
};

type Props<DataType> = {
  /**
   * Service to be used for fetching all of the items
   */
  fetchMethod: (query?: { [name: string]: string }) => Promise<IPaginatedResponse<DataType>>;

  searchOptions?: { [name: string]: string };
};

export function usePagination<DataType>(props: Props<DataType>): ReturnType<DataType> {
  const [items, setItems] = useState<DataType[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [nextPage, setNextPage] = useState<string>();

  /**
   * Fetches the items and sets the response in the items state
   */
  const fetchItems = useCallback(
    async (query?: { [name: string]: string }) => {
      try {
        setIsFetching(true);

        const response = await props.fetchMethod(query);
        const nextPage = response.next?.slice(-1);
        setNextPage(nextPage);

        // merge previously fetched items with response

        const isFirstItems = query?.page === "1";
        const mergedItems = isFirstItems
          ? response.results
          : [...items, ...(response.results ?? [])];

        setItems(mergedItems);

        // Update the next url so we can use it when we want to fetch more items
      } catch (e) {
        console.error("Something went wrong", e?.toString());
      } finally {
        setIsFetching(false);
      }
    },
    [props, setItems, items, setNextPage]
  );

  /**
   * Initial fetching of items
   */
  useEffect(() => {
    fetchItems({ ...props.searchOptions, ...{ page: "1" } });
    // eslint-disable-next-line
  }, [props.searchOptions]);

  /**
   * Fetches the next items
   */
  const fetchNextItems = useCallback(() => {
    if (!nextPage || isFetching) {
      return;
    }

    // for now, just get the last part of the url and use it as input for fetching next items
    fetchItems({ ...props.searchOptions, page: nextPage });
  }, [isFetching, nextPage, fetchItems, props.searchOptions]);

  return {
    items,
    hasReachedLimit: !nextPage,
    fetchNextItems,
    isFetching
  };
}
