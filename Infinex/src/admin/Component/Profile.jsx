import React from 'react'

const RightSidebar = () => {
  return (
    <>
        {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#profileSidebar" aria-controls="offcanvasRight"></button> */}

        <div class="offcanvas offcanvas-end" tabindex="-1" id="profileSidebar" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
              <h4 class="offcanvas-title" id="offcanvasRightLabel">Profile</h4>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <p>This is profile page</p>
          </div>
        </div>
    </>
  )
}

export default RightSidebar
