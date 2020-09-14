import React from 'react'
import { useLaunchesQuery } from '../../generated/graphql'
import Launch from './Launch'

const LaunchContainer = () => {
    const { data, error, loading } = useLaunchesQuery();
    if (error || !data) {
        return <div>error..</div>
    }
    if (loading) {
        return <div>loading....</div>
    }
    return (
        <Launch data={data} />
    )
}


export default LaunchContainer