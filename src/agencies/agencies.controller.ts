import { Controller, Get, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AgenciesService, GetAgencyRequest } from './agencies.interface';

@Controller('agencies')
export class AgenciesController {
  constructor(
    @Inject('AgenciesService')
    private readonly agenciesService: AgenciesService,
  ) {}

  @Get()
  async listAgencies() {
    return this.agenciesService.listAgencies();
  }

  @GrpcMethod('AgenciesService', 'ListAgencies')
  async rpcListAgencies() {
    return this.agenciesService.listAgencies();
  }

  @Get(':id')
  async getAgency(id: string) {
    return this.agenciesService.getAgencyById({ id });
  }

  @GrpcMethod('AgenciesService', 'GetAgency')
  async rpcGetAgency({ id }: GetAgencyRequest) {
    return this.agenciesService.getAgencyById({ id });
  }
}
