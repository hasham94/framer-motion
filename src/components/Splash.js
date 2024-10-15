import * as React from "react";
import { motion, useMotionValue, useTransform, useMotionValueEvent } from "framer-motion";

export const Splash = (props) => {
    const x = useMotionValue(0);
    const xInput = [-100, 0, 100];
    const background = useTransform(x, xInput, [
        "linear-gradient(180deg, #d299c2 0%, rgb(211, 9, 225) 100%)",
        "linear-gradient(180deg, #fef9d7 0%, rgb(68, 0, 255) 100%)",
        "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
    ]);
    const color = useTransform(x, xInput, [
        "rgb(211, 9, 225)",
        "rgb(68, 0, 255)",
        "rgb(3, 209, 0)"
    ]);
    const tickPath = useTransform(x, [10, 100], [0, 1]);
    const crossPathA = useTransform(x, [-10, -55], [0, 1]);
    const crossPathB = useTransform(x, [-50, -100], [0, 1]);

    useMotionValueEvent(x, "change", (latest) => {
        console.log("x changed to", latest)
        props.setSwipeValue(latest)
    })

    return (
        <motion.div className="example-container" style={{ background }}>
            <motion.div
                className="box"
                style={{ x }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
            >
                <svg className="progress-icon" viewBox="0 0 50 50">
                    <motion.path
                        fill="none"
                        strokeWidth="2"
                        stroke={color}
                        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                        style={{ translateX: 5, translateY: 5 }}
                    />
                    <motion.path
                        fill="none"
                        strokeWidth="1"
                        stroke={color}
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
                        strokeDasharray="0 1"
                        style={{ pathLength: tickPath, translateX: 17, translateY: 17 }}
                    />
                    <motion.path
                        fill="none"
                        strokeWidth="2"
                        stroke={color}
                        d="M17,17 L33,33"
                        strokeDasharray="0 1"
                        style={{ pathLength: crossPathA }}
                    />
                    <motion.path
                        fill="none"
                        strokeWidth="2"
                        stroke={color}
                        d="M33,17 L17,33"
                        strokeDasharray="0 1"
                        style={{ pathLength: crossPathB }}
                    />
                </svg>
            </motion.div>
        </motion.div>
    );
};

export default Splash