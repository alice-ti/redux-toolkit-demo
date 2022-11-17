import React, { lazy, Suspense } from 'react'
import { Navigate, Outlet, RouteObject, useRoutes } from 'react-router-dom'

const Home = lazy(async () => await import('@pages/home'))
const Mine = lazy(async () => await import('@pages/mine'))
const What = lazy(async () => await import('@pages/what'))

const BaseLayout: React.FC = () => {
	return (
		<>
			<div className="h-screen flex flex-col">
				<Outlet />
			</div>
		</>
	)
}

const routes = [
	{
		path: '/',
		// question 为什么navigate会报错 ?
		// element: <Navigate to="/home" />,
		element: <BaseLayout />,
		children: [{ path: '/home', element: <Home />, meta: { title: 'Home' } }]
	},

	{ path: '/what', element: <What />, meta: { title: 'What' } },
	{ path: '/mine', element: <Mine />, meta: { title: 'Mine' } }
]

const Route = (): React.ReactElement | null => useRoutes(routes as RouteObject[])

export default () => <Suspense>{Route()}</Suspense>
