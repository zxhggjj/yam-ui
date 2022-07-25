/*
 * @Author: ZengXinHao
 * @Date: 2022-07-25 14:42:58
 * @LastEditTime: 2022-07-25 14:43:03
 * @LastEditors: ZengXinHao
 * @FilePath: \h5\1\examples\typings\vue-shim.d.ts
 * @Description: 
 */
declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component:DefineComponent<{},{},any>
}