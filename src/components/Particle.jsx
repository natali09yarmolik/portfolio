import {useCallback} from "react";
import {Engine} from "tsparticles-engine";
import {loadBigCirclesPreset} from "tsparticles-preset-big-circles";
import s from "../main/mainBlock/main.module.scss";
import Particles from "react-particles";

export const Particle = (props) => {
    const options = {
        preset: "bigCircles",
    }
    const customInit = useCallback(async ( engine: Engine )=> {
        await loadBigCirclesPreset(engine);
    }, [])
    return (
        <>
            <Particles className={s.particles}
                      options={options}
                      init={customInit}/>
            </>
    )
}
