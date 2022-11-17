export const httpsTest = async () => {
	return await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('成功')
		}, 2000)
	})
}
