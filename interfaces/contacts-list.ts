export interface ContactsListResponse {
    count?:       number;
    perPage?:     number;
    currentPage?: number;
    totalPages:  number;
    page:        number;
    results:     ContactsResult[];
}

export interface ContactsResult {
    _id:       string;
    firstName: string;
    lastName:  string;
    email:     string;
    phone:     string;
    createdAt: Date;
    updatedAt: Date;
    __v:       number;
    id:        string;
}