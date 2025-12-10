import clsx from "clsx";
import css from './Options.module.css'
import { FaRegSmile, FaRegFrown, FaRegMeh } from "react-icons/fa";

export default function Options({update, total}){
    return <>
        <button className={clsx(css.optionsBtn, css.good)} onClick={() => update("good")} ><FaRegSmile /> Good</button>
        <button className={clsx(css.optionsBtn, css.neutral)} onClick={() => update("neutral")} ><FaRegMeh /> Neutral</button>
        <button className={clsx(css.optionsBtn, css.bad)} onClick={() => update("bad")} ><FaRegFrown /> Bad</button>
        {total > 0 && (
            <button className={clsx(css.optionsBtn)} onClick={() => update("reset") } >Reset</button>
        )}
    </>;
}