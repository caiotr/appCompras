import { Tabs } from "expo-router";
import React from "react";

export default function AppLayout() {
    return (
        <Tabs>
            <Tabs.Screen

                name="home"
                options={{

                    href: "/",
                }}
            />
            <Tabs.Screen

                name="Comprovantes"
                options={{

                    href: "./comprovantes.tsx",
                }}
            />
            <Tabs.Screen

                name="Tela B"
                options={{

                    href: "/",
                }}
            />
        </Tabs>
    );
}