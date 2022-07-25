/*
 * @Author: ZengXinHao
 * @Date: 2022-07-25 16:38:27
 * @LastEditTime: 2022-07-25 16:53:52
 * @LastEditors: ZengXinHao
 * @FilePath: \h5\1\packages\components\src\button\index.ts
 * @Description: 
 */
import button from './button.vue'
import type {App,Plugin} from "vue"
type SFCWithInstall<T> = T&Plugin
const withInstall = <T>(comp:T) => {
    (comp as SFCWithInstall<T>).install = (app:App)=>{
        //注册组件
        app.component((comp as any).name,comp)
    }
    return comp as SFCWithInstall<T>
}
const Button = withInstall(button)
export default Button
