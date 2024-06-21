import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { AgenciesService } from './agencies.interface';
import { AgencyType } from './agencies.types';

@Resolver(() => AgencyType)
export class AgenciesResolver {
  constructor(
    @Inject('AgenciesService')
    private readonly agenciesService: AgenciesService,
  ) {}

  @Query(() => [AgencyType])
  async listAgencies() {
    return this.agenciesService.listAgencies().agencies;
  }

  @Query(() => AgencyType)
  async getAgencyById(@Args('id') id: string) {
    return this.agenciesService.getAgencyById({ id }).agency;
  }
}
