import React from 'react'
import './card.css'

type Member = {
  name: string
  imgUrl: string
  noOfReads: number
}

interface CardProps {
  label: string
  members: Array<Member>
}

export const Card = ({ label, members, ...props }: CardProps) => {
  return (
    <ul className="grid">
      {members.map((member, index) => (
        // <li key={member.name}>{member.name}</li>
        <div  key={index} className="card">
          <div className="container">
            <img src={member.imgUrl} alt="Avatar"></img>
            <div style={{ display: 'inline-block', marginLeft: '4px' }}>
              <h4>
                <b>{member.name}</b>
              </h4>
              <h5>
                {member.noOfReads} books read
              </h5>
            </div>
          </div>
        </div>
      ))}
    </ul>
  )
}
