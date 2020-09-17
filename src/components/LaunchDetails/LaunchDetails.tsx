import React, { FC } from 'react'

import { LaunchInfoQuery } from '../../generated/graphql'

interface Props {
    data: LaunchInfoQuery
}


const LaunchDetail: FC<Props> = ({ data }) => {
    if (!data.launch) {
        return <div>no fliight gound</div>
    }
    console.log(data.launch.details)
    return (
        <div>
            <div>
                name: {data.launch?.mission_name}
                year: {data.launch?.launch_year}
                success: {data.launch?.launch_success}
                rocket: {data.launch?.rocket?.rocket_name}
                Details: <br />
                {data.launch?.details}
                {/* Images: {data.launch?.links?.flickr_images?.map(image => {
                    <img src={image} />
                })} */}
            </div>
        </div>
    )
}

export default LaunchDetail;