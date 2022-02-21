import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/guide",
		name: "Guide",
		component: () => import("../views/Docs.vue"),
		children: [
			{
				path: "installation",
				component: () => import("../views/guide/Installation.vue"),
			},
			{
				path: "configuration",
				component: () => import("../views/guide/Configuration.vue"),
			},
		],
	},
	{
		path: "/components",
		name: "Components",
		component: () => import("../views/Docs.vue"),
		children: [
			{
				path: "action",
				component: () => import("../views/RouteInjection.vue"),
				children: [
					{
						path: "button",
						component: () =>
							import("../views/components/action/Button.vue"),
					},
				],
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
