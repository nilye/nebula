import { Component } from "vue";

export interface NebulaContext {
	theme: {
		color: Record<string, any>,
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
