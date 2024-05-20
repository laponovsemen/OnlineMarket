import { PluginItem } from "@babel/core";

/**
 * создание плагина для выпиливания дата-тестайди
 * из откомпилированого джс кода
 * сайт для изучения абстрактного синтаксического дерева:
 * astexplorer.net
 *
 * example
 * Identifier(path) {
 *                 const name = path.node.name;
 *                 // reverse the name : JavaScript -> tpircSavaJ
 *                 path.node.name = name
 *                     .split("")
 *                     .reverse()
 *                     .join("");
 *             }
 */

export default function (): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const forbidden = state.opts.props || [];
                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;

                        if (forbidden.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
