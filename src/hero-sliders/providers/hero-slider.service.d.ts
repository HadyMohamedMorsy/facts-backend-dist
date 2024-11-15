import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { CreateHeroSliderDto } from "../dtos/create-hero-slider.dto";
import { HeroSlider } from "../hero-slider.entity";
export declare class HeroSliderService extends BaseService<HeroSlider, CreateHeroSliderDto> {
    constructor(repository: Repository<HeroSlider>, filterData: FilterDataProvider<HeroSlider>, usersService: UserService);
    findAll(filter: FilterQueryDto): Promise<{
        data: HeroSlider[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    front(filter: FilterQueryDto): Promise<{
        data: HeroSlider[];
    }>;
}
