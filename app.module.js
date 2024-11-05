"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const serve_static_1 = require("@nestjs/serve-static");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const advertisements_module_1 = require("./advertisements/advertisements.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const applicants_education_module_1 = require("./applicants-education/applicants-education.module");
const applicants_graduates_module_1 = require("./applicants-graduates/applicants-graduates.module");
const applicants_job_module_1 = require("./applicants-job/applicants-job.module");
const auth_module_1 = require("./auth/auth.module");
const jwt_config_1 = require("./auth/config/jwt.config");
const access_token_guard_1 = require("./auth/guards/access-token/access-token.guard");
const authentication_guard_1 = require("./auth/guards/authentication/authentication.guard");
const banner_module_1 = require("./banner/banner.module");
const blogs_module_1 = require("./blogs/blogs.module");
const category_module_1 = require("./categories/category.module");
const consultancy_module_1 = require("./consultancy/consultancy.module");
const contact_us_module_1 = require("./contact-us/contact-us.module");
const educations_module_1 = require("./educations/educations.module");
const employer_module_1 = require("./employer/employer.module");
const gallary_module_1 = require("./gallary/gallary.module");
const graduates_module_1 = require("./graduates/graduates.module");
const hero_slider_module_1 = require("./hero-sliders/hero-slider.module");
const jobs_module_1 = require("./jobs/jobs.module");
const magazines_module_1 = require("./magazines/magazines.module");
const mail_module_1 = require("./mail/mail.module");
const partners_module_1 = require("./partners/partners.module");
const patch_module_1 = require("./patch/patch.module");
const profile_module_1 = require("./profile/profile.module");
const role_module_1 = require("./roles/role.module");
const services_home_module_1 = require("./services-home/services-home.module");
const settings_module_1 = require("./settings/settings.module");
const filter_date_module_1 = require("./shared/common/filter/filter-date.module");
const filter_data_provider_1 = require("./shared/common/filter/providers/filter-data.provider");
const transform_response_interceptor_1 = require("./shared/common/interceptor/transform-response.interceptor");
const app_config_1 = require("./shared/config/app.config");
const database_config_1 = require("./shared/config/database.config");
const enviroment_validation_1 = require("./shared/config/enviroment.validation");
const social_links_module_1 = require("./social-links/social-links.module");
const statistics_module_1 = require("./statistics/statistics.module");
const subscribtion_module_1 = require("./subscribtion/subscribtion.module");
const team_module_1 = require("./team/team.module");
const users_module_1 = require("./users/users.module");
const ENV = process.env.NODE_ENV;
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            services_home_module_1.ServicesHomeModule,
            graduates_module_1.GraduatesModule,
            employer_module_1.EmployerModule,
            social_links_module_1.SocialLinksModule,
            subscribtion_module_1.SubscribtionModule,
            applicants_job_module_1.ApplicantJobsModule,
            applicants_education_module_1.ApplicantEducationModule,
            advertisements_module_1.AdvertisementsModule,
            blogs_module_1.BlogsModule,
            social_links_module_1.SocialLinksModule,
            statistics_module_1.StatisticsModule,
            banner_module_1.BannerModule,
            hero_slider_module_1.HeroSliderModule,
            category_module_1.CategoryModule,
            patch_module_1.PatchModule,
            role_module_1.RoleModule,
            team_module_1.TeamModule,
            applicants_graduates_module_1.ApplicantGraduatesModule,
            settings_module_1.SettingsModule,
            contact_us_module_1.ContactUsModule,
            gallary_module_1.GallaryModule,
            mail_module_1.MailModule,
            users_module_1.UsersModule,
            partners_module_1.PartnersModule,
            magazines_module_1.MagazinesModule,
            jobs_module_1.JobsModule,
            educations_module_1.EducationsModule,
            consultancy_module_1.ConsultancyModule,
            filter_date_module_1.FilterDateModule,
            mail_module_1.MailModule,
            auth_module_1.AuthModule,
            profile_module_1.ProfileModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: !ENV ? ".env" : `.env.${ENV}`,
                load: [app_config_1.default, database_config_1.default],
                validationSchema: enviroment_validation_1.default,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, "..", "public"),
                serveRoot: "/public",
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: "postgres",
                    synchronize: true,
                    port: configService.get("database.port"),
                    username: configService.get("database.user"),
                    password: configService.get("database.password"),
                    host: configService.get("database.host"),
                    autoLoadEntities: true,
                    database: configService.get("database.name"),
                }),
            }),
            config_1.ConfigModule.forFeature(jwt_config_1.default),
            jwt_1.JwtModule.registerAsync(jwt_config_1.default.asProvider()),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            filter_data_provider_1.FilterDataProvider,
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: authentication_guard_1.AuthenticationGuard,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: transform_response_interceptor_1.TransformInterceptor,
            },
            access_token_guard_1.AccessTokenGuard,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map