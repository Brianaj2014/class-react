import React from 'react'

const ChirpCard = props => {
    return (
        <div class="card" style={{ width: "15rem" }}>
            <div class="card-body">
                <h5 class="card-title">{props.chirp.username}</h5>
                <p class="card-text">{props.chirp.message}</p>
            </div>
        </div>
    )
}
