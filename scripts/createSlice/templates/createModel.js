const fs = require("fs/promises");
const resolveRoot = require("../resolveRoot");
const reduxSliceTemplate = require("../reduxSliceTemplate");
const schemaTypeTemplate = require("../schemaTypeTemplate");

module.exports = async (layer, sliceName) => {
    const resolveModelPath = (...segments) =>
        resolveRoot("src", layer,sliceName, "model", ...segments); //указываем путь до папки модел

    const createModelStructure = async () => {
        try {
            await fs.mkdir(resolveModelPath());
            await fs.mkdir(resolveModelPath("types"));
            await fs.mkdir(resolveModelPath("slices"));
            await fs.mkdir(resolveModelPath("selectors"));
            await fs.mkdir(resolveModelPath("services"));
            // создаем папки для модели
        } catch (e) {
            console.log(`Не удалось создать model сегмент для слайса ${sliceName}`, e);
        }

        const createReduxSlice = async () => {
            try {
                await fs.writeFile(
                    resolveModelPath("slices", `${sliceName}Slice.ts`),
                    reduxSliceTemplate(sliceName),
                );
            } catch (e) {
                console.log("Не удалось создать редакс слайс", e);
            }
        };
    };
};
