import React from 'react'
import { useLaunchesQuery } from '../../generated/graphql'
import Launch, { ownProp } from './Launch'

const LaunchContainer = (props: ownProp) => {
    const { data, error, loading } = useLaunchesQuery();
    if (error || !data) {
        1
        return <div>error..</div>
    }
    if (loading) {
        return <div>loading....</div>
    }
    return (
        <Launch data={data} {...props} />
    )
}


export default LaunchContainer