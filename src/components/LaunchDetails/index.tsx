import React from 'react'
import { useLaunchInfoQuery } from '../../generated/graphql'


import LaunchDetail from './LaunchDetails'

const LaunchDetailsContainer = () => {
    const { data, error, loading } = useLaunchInfoQuery();
    if (loading) {
        return <div>loading...</div>
    }
    if (error || !data) {
        return <div>error..</div>
    }
    return <LaunchDetail data={data} />
}

export default LaunchDetailsContainer;
