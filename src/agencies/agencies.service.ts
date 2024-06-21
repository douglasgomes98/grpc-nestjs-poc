import { Injectable } from '@nestjs/common';
import {
  AgenciesService,
  Agency,
  GetAgencyRequest,
  GetAgencyResponse,
  ListAgenciesResponse,
} from './agencies.interface';

@Injectable()
export class AgenciesServiceInMemory implements AgenciesService {
  private readonly agencies: Agency[] = [
    {
      id: '1',
      name: 'Douglas Travel',
      email: 'douglas@gmail.com',
    },
    {
      id: '2',
      name: 'Enrique Travel',
      email: 'enrique@gmail.com',
    },
    {
      id: '3',
      name: 'Pedro Travel',
      email: 'pedro@gmail.com',
    },
  ];

  listAgencies(): ListAgenciesResponse {
    return {
      agencies: this.agencies,
    };
  }

  getAgencyById({ id }: GetAgencyRequest): GetAgencyResponse {
    const agency = this.agencies.find((agency) => agency.id === id);

    if (!agency) {
      throw new Error('Agency not found');
    }

    return {
      agency,
    };
  }
}
