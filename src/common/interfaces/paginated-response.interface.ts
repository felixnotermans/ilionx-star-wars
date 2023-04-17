interface IPaginatedResponse<DataType> {
  count: number;
  next: string;
  previous: string;
  results: DataType[];
}

export default IPaginatedResponse;
