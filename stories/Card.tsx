import React from 'react'
import './card.css'

type Member = {
  firstName: string
  lastName: string
  imageURL: string
  titlesRead: number
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
          {/* <div className="container"> */}
            <img src={member.imageURL} alt="Avatar"></img>
            <div style={{verticalAlign: "top", display: 'inline-block', marginLeft: '4px', marginTop: "2px", height: "100%" }}>
              <h4>
                <b>{member.firstName + ' ' + member.lastName}</b>
              </h4>
              <h5>
                {member.titlesRead} books read
              </h5>
            </div>
          
        </div>
      ))}
    </ul>
  )
}
