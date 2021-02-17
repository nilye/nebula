import { Component } from "vue";

export interface NebulaContext {
	theme: {
		palette: Record<string, any>,
		current: string
	}
}

export interface NebulaInstallOptions {
	defaultTheme: string,
	componentPrefix: string
	components: {
		[key: string]: Component
	}
}
