exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 3:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(4);
const core_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(6);
const app_module_1 = __webpack_require__(7);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: process.env.FRONT_URL,
            credentials: true,
        },
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Todolist API')
        .setDescription('This is todolist API.')
        .setVersion('1.0')
        .addCookieAuth('connect.sid')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3010);
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7d6ef82ecdaf647a6260")
/******/ })();
/******/ 
/******/ }
;