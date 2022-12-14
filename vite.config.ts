import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		// 配置路径别名
		alias: {
			'@': resolve(__dirname, './src'),
			'@type': resolve(__dirname, './src/type'),
			'@pages': resolve(__dirname, './src/pages'),
			'@store': resolve(__dirname, './src/store'),
			'@router': resolve(__dirname, './src/router')
		},
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
	}
})
