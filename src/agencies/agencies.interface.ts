export interface AgenciesService {
  listAgencies(): ListAgenciesResponse;
  getAgencyById(request: GetAgencyRequest): GetAgencyResponse;
}

export interface Agency {
  id: string;
  name: string;
  email: string;
}

export interface ListAgenciesResponse {
  agencies: Agency[];
}

export interface GetAgencyRequest {
  id: string;
}

export interface GetAgencyResponse {
  agency: Agency;
}
