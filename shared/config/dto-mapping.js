"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dtoMappings = void 0;
const create_advertisements_dto_1 = require("../../advertisements/dtos/create-advertisements.dto");
const create_applicants_job_1 = require("../../applicants-job/dtos/create-applicants-job");
const patch_applicants_job_dto_1 = require("../../applicants-job/dtos/patch-applicants-job.dto");
const create_banner_dto_1 = require("../../banner/dtos/create-banner.dto");
const patch_banner_dto_1 = require("../../banner/dtos/patch-banner.dto");
const create_blogs_blogs_dto_1 = require("../../blogs/dto/create-blogs-blogs.dto");
const patch_blog_dto_1 = require("../../blogs/dto/patch-blog.dto");
const create_category_dto_1 = require("../../categories/dto/create-category.dto");
const patch_category_dto_1 = require("../../categories/dto/patch-category.dto");
const create_consultancy_dto_1 = require("../../consultancy/dtos/create-consultancy.dto");
const patch_consultancy_dto_1 = require("../../consultancy/dtos/patch-consultancy.dto");
const create_educations_dto_1 = require("../../educations/dtos/create-educations.dto");
const patch_education_dto_1 = require("../../educations/dtos/patch-education.dto");
const create_gallary_dto_1 = require("../../gallary/dtos/create-gallary.dto");
const patch_gallary_dto_1 = require("../../gallary/dtos/patch-gallary.dto");
const create_graduates_1 = require("../../graduates/dtos/create-graduates");
const patch_graduates_dto_1 = require("../../graduates/dtos/patch-graduates.dto");
const create_hero_slider_dto_1 = require("../../hero-sliders/dtos/create-hero-slider.dto");
const patch_consultancy_dto_2 = require("../../hero-sliders/dtos/patch-consultancy.dto");
const create_job_dto_1 = require("../../jobs/dtos/create-job.dto");
const patch_job_dto_1 = require("../../jobs/dtos/patch-job.dto");
const create_magazine_dto_1 = require("../../magazines/dto/create-magazine.dto");
const patch_magazine_dto_1 = require("../../magazines/dto/patch-magazine.dto");
const create_partners_dto_1 = require("../../partners/dtos/create-partners.dto");
const patch_partners_dto_1 = require("../../partners/dtos/patch-partners.dto");
const create_patch_dto_1 = require("../../patch/dtos/create-patch.dto");
const patch_patch_dto_1 = require("../../patch/dtos/patch-patch.dto");
const patch_service_dto_1 = require("../../services-home/dto/patch-service.dto");
const service_dto_1 = require("../../services-home/dto/service.dto");
const create_setting_dto_1 = require("../../settings/dtos/create-setting.dto");
const patch_setting_dto_1 = require("../../settings/dtos/patch-setting.dto");
const create_social_link_1 = require("../../social-links/dtos/create-social-link");
const patch_social_link_dto_1 = require("../../social-links/dtos/patch-social-link.dto");
const create_statistics_dto_1 = require("../../statistics/dtos/create-statistics.dto");
const patch_statistics_dto_1 = require("../../statistics/dtos/patch-statistics.dto");
const create_team_dto_1 = require("../../team/dtos/create-team.dto");
const patch_team_dto_1 = require("../../team/dtos/patch-team.dto");
const APIVERSION = "/api/v1";
exports.dtoMappings = {
    [`${APIVERSION}/consultancy/store`]: create_consultancy_dto_1.CreateConsultancyDto,
    [`${APIVERSION}/consultancy/update`]: patch_consultancy_dto_1.PatchConsultancyDto,
    [`${APIVERSION}/education/store`]: create_educations_dto_1.CreateEducationsDto,
    [`${APIVERSION}/education/update`]: patch_education_dto_1.PatchEducationDto,
    [`${APIVERSION}/team/store`]: create_team_dto_1.CreateTeamDto,
    [`${APIVERSION}/team/update`]: patch_team_dto_1.PatchTeamDto,
    [`${APIVERSION}/partner/store`]: create_partners_dto_1.CreatePartnersDto,
    [`${APIVERSION}/partner/update`]: patch_partners_dto_1.PatchPartnerDto,
    [`${APIVERSION}/slider/store`]: create_hero_slider_dto_1.CreateHeroSliderDto,
    [`${APIVERSION}/slider/update`]: patch_consultancy_dto_2.PatchPostDto,
    [`${APIVERSION}/banner/store`]: create_banner_dto_1.CreateBannerDto,
    [`${APIVERSION}/banner/update`]: patch_banner_dto_1.PatchBannerDto,
    [`${APIVERSION}/statistics/store`]: create_statistics_dto_1.CreateStatisticsDto,
    [`${APIVERSION}/statistics/update`]: patch_statistics_dto_1.PatchStatisticsDto,
    [`${APIVERSION}/gallary/store`]: create_gallary_dto_1.CreateGallarysDto,
    [`${APIVERSION}/gallary/update`]: patch_gallary_dto_1.PatchGallaryDto,
    [`${APIVERSION}/category/store`]: create_category_dto_1.CreateCategoryDto,
    [`${APIVERSION}/category/update`]: patch_category_dto_1.PatchCategoryDto,
    [`${APIVERSION}/job/store`]: create_job_dto_1.CreateJobDto,
    [`${APIVERSION}/job/update`]: patch_job_dto_1.PatchJobDto,
    [`${APIVERSION}/job/store/front`]: create_job_dto_1.CreateJobDto,
    [`${APIVERSION}/magazine/store`]: create_magazine_dto_1.CreateMagazineDto,
    [`${APIVERSION}/magazine/update`]: patch_magazine_dto_1.PatchMagazineDto,
    [`${APIVERSION}/graduates/store`]: create_graduates_1.CreateGraduatestDto,
    [`${APIVERSION}/graduates/update`]: patch_graduates_dto_1.PatchGraduatesDto,
    [`${APIVERSION}/graduates/store/front`]: create_graduates_1.CreateGraduatestDto,
    [`${APIVERSION}/graduates/update/front`]: patch_graduates_dto_1.PatchGraduatesDto,
    [`${APIVERSION}/blog/store`]: create_blogs_blogs_dto_1.CreateBlogsDto,
    [`${APIVERSION}/blog/update`]: patch_blog_dto_1.PatchBlogDto,
    [`${APIVERSION}/setting/store`]: create_setting_dto_1.CreateSettingDto,
    [`${APIVERSION}/setting/update`]: patch_setting_dto_1.patchSettingDto,
    [`${APIVERSION}/patch/store`]: create_patch_dto_1.CreatePatchDto,
    [`${APIVERSION}/patch/update`]: patch_patch_dto_1.PatchPatchDto,
    [`${APIVERSION}/service-home/store`]: service_dto_1.CreateServiceDto,
    [`${APIVERSION}/service-home/update`]: patch_service_dto_1.PatchServiceDto,
    [`${APIVERSION}/social-link/store`]: create_social_link_1.CreateSocialLinkDto,
    [`${APIVERSION}/social-link/update`]: patch_social_link_dto_1.PatchSocialLinkDto,
    [`${APIVERSION}/applicant-Job/store/front`]: create_applicants_job_1.CreateApplicantJobstDto,
    [`${APIVERSION}/applicant-Job/update/front`]: patch_applicants_job_dto_1.PatchApplicantJobsDto,
    [`${APIVERSION}/advertisement/store`]: create_advertisements_dto_1.CreatAdvertisementDto,
    [`${APIVERSION}/advertisement/update`]: create_advertisements_dto_1.CreatAdvertisementDto,
};
//# sourceMappingURL=dto-mapping.js.map