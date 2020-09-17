import React, { FC } from 'react'
import { LaunchesQuery } from '../../generated/graphql'

export interface ownProp {
    handleidChange: (id: any) => void
}

interface Props extends ownProp {
    data: LaunchesQuery,
}

const Launch: FC<Props> = ({ data, handleidChange }) => {
    return (
        <div>
            <div>All SpaceX Launches</div>
            <ol>
                {
                    !!data.launches && data.launches.map(
                        (launches, i) => {
                            return (
                                <li
                                    key={i}
                                >
                                    <button onClick={() => handleidChange(launches?.flight_number!)} >launch</button>
                                    {launches?.mission_name} - {launches?.rocket?.rocket_name}
                                    {/* year: {launches.} */}
                                    success: {launches?.launch_success}
                                    launch-site: {launches?.launch_site?.site_name}

                                </li>
                            )
                        }
                    )
                }
            </ol>
        </div>
    )
}

export default Launch;