interface IModel {
  /**
   * The ISO 8601 date format of the time that this resource was created
   */
  created: string;
  /**
   * The ISO 8601 date format of the time that this resource was edited
   */
  edited: string;
  /**
   * The hypermedia URL of this resource
   */
  url: string;
}

export default IModel;
