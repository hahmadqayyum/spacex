import gql from 'graphql-tag'
//query LaunchInfo can be any name
export const LAUNCHDETAILS_QUERY = gql`
    query LaunchInfo($id: String){
        launch(id: $id) {
        links {
            flickr_images
            video_link
        }
        details
        launch_site {
            site_name
        }
        launch_success
        launch_year
        mission_id
        mission_name
        rocket {
            rocket_name
        }
        }
    }
  
`