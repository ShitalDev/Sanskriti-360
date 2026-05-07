# Sanskriti-360

### Preserving Cultural Authenticity & Indigenous Knowledge in India

## Overview

Sanskriti-360 is a digital platform designed to document, evaluate, and preserve indigenous cultural and ecological practices across India. The project focuses on protecting cultural authenticity through a structured, transparent, and community-driven framework.

The platform combines cultural research, ecological context, community verification, and scalable technology to address issues such as cultural dilution, loss of indigenous knowledge, environmental impact of rituals, and lack of accountability in heritage preservation.

The current MVP focuses on indigenous ecological and ritual practices from Madhya Pradesh, with a scalable architecture designed for future expansion across all Indian states.

## Problem Statement

Many traditional cultural practices in India are:

1.Gradually disappearing                                                                                                     
2.Commercialized or distorted                                                                                                
3.Poorly documented                                                                                                          
4.Detached from their ecological significance                                                                                
5.Controlled by external narratives rather than local communities                                                            

There is currently no structured digital system that can:

1.Measure cultural authenticity                                                                                              
2.Track preservation status                                                                                                  
3.Integrate ecological relevance                                                                                             
4.Include community-led validation                                                                                           

Sanskriti-360 addresses this gap.

### Key Features

#### 1. Indigenous Knowledge Digital Repository                                                                                   
Documents indigenous ecological and ritual practices
Stores cultural narratives, ecological links, and community ownership
Organized state-wise and community-wise

#### 2. Cultural Authenticity Index (CAI)                                                                                    
A transparent scoring framework that evaluates cultural practices using measurable indicators such as:

1.Ritual Continuity                                                                                                          
2.Ecological Alignment                                                                                                       
3.Community Authority                                                                                                        
4.Knowledge Transmission                                                                                                     
5.Distortion Risk                                                                                                            

The CAI system uses weighted scoring logic and evidence-based evaluation.

#### 3. Community-Led Verification System                                                                                    
Role-based verification workflow,
Researchers submit cultural data,
Community verifiers validate authenticity,
Confidence levels increase through verified endorsements

#### 4. Interactive Dashboard                                                                                                
Displays overall CAI scores,
Radar chart for indicator visualization,
Trend analysis and cultural risk insights,
Evidence-backed score explanations

## Tech Stack                                                                                                                

### Frontend
React.js,
Tailwind CSS,
Recharts

### Backend
Node.js,
Express.js

### Database
PostgreSQL

### Authentication
JWT-based authentication,
Role-based access control

### System Architecture

Frontend (React)                                                                                                             
        ↓                                                                                                                    
REST API (Express.js)                                                                                                        
        ↓                                                                                                                    
Service Layer (CAI Logic & Verification)                                                                                     
        ↓                                                                                                                    
PostgreSQL Database                                                                                                          
        ↓                                                                                                                    
Optional Hash/Audit Layer                                                                                                    

#### Database Modules

The platform currently includes:

1.Practices                                                                                                                  
2.CAI Indicators                                                                                                             
3.CAI Scores                                                                                                                 
4.Community Actors                                                                                                           
5.Verification Records                                                                                                       
6.Current MVP Scope                                                                                                          

### Folder Structure

backend/src/                                                                                                                 
 ├── controllers/                                                                                                            
 ├── services/                                                                                                               
 ├── routes/                                                                                                                 
 ├── models/                                                                                                                 
 ├── middleware/                                                                                                             
 ├── config/                                                                                                                 

frontend/src/                                                                                                                
 ├── components/                                                                                                             
 ├── pages/                                                                                                                  
 ├── services/                                                                                                               
 ├── context/                                                                                                                


### Installation & Setup

#### Backend Setup
cd backend                                                                                                                   
npm install                                                                                                                  
npm run dev                                                                                                                  

#### Frontend Setup
cd frontend                                                                                                                  
npm install                                                                                                                  
npm run dev                                                                                                                  
