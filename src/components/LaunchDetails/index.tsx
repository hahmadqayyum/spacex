import React, { useEffect } from 'react'
import { useLaunchInfoQuery } from '../../generated/graphql'


import LaunchDetail from './LaunchDetails'
interface ownProps {
    id: number
}

const LaunchDetailsContainer = ({ id }: ownProps) => {
    const { data, error, loading, refetch } = useLaunchInfoQuery({ variables: { id: String(id) } });

    useEffect(() => {
        refetch()
    }, [id])
    if (loading) {
        return <div>loading...</div>
    }
    if (error || !data) {
        return <div>error..</div>
    }
    return <LaunchDetail data={data} />
}

export default LaunchDetailsContainer;