<p align="center">
  <img src="https://i.imghippo.com/files/qIqc3187dJg.png" height="350" alt="Mediscan"/>
</p>

<p align="center">
  <em> Healthcare at your fingertips!👋</em>
</p>

[MediScan](https://mediscan.care) gives you easy access to wait times for hospitals nearby, allows you to self diagnose so you can have the best medical experience, and connect with doctors remotely through telemedicine🚀!

- Source Code for Website: https://github.com/TheDevvers/www
- Source Code for AI Model and API: https://github.com/TheDevvers/model-api
- Source Code for Video Conferencing Server: https://github.com/TheDevvers/video-server

---


## Inspiration
When Navin's Mom broke her arm, she contacted their nearest hospital to get an estimate of how long the ER wait would be, and they said they can't give public wait times. They ended up waiting at the hospital for 8 hours, and Navin's Mom had nobody to consult with for what actions she could take to reduce the pain, not injuring herself further. This is when we got the idea for Mediscan, so patients can be safer and smarter in their experience.

## What it does/How we built it
We built Mediscan (https://mediscan.care) to give medical patients a platform where they can completely learn about their specific situation and take the right steps. Each user either signs in as a doctor or patient, and fills out their information. Using our telemedicine feature, users can actually consult with doctors on video conference calls about what they can do in their situation. If a doctor is not available, users can go to the self-diagnose page and talk to an interactive LLM AI powered assistant that prompts the user for their information and tells them what to do. We also have our own built and trained AI image classification models that detect skin, mouth, and nail (the most common places for external diseases/conditions) conditions. When users upload a photo of their condition, a disease prediction is given along with some steps to take. Finally, there is an emergency room wait times page, which provides accurate and regularly updated wait times, so when a user has to visit the ER, they know where they should go to get treated quickest. 

## Challenges we faced/What we learned
For the image diagnosis models, we often ran into problems with overfitting and had to retrain the models on different epochs in order to get them to optimal accuracy. We learned how to optimally train CNN’s quicker. After retrieving the hospital data from the Centers for Medicare & Medicaid Services API, we realized that the data was very unstructured and difficult to interpret in JSON. So we wrote a script that formatted all of the data to display it properly on our site.

## What's next for Mediscan.care
We plan to consult with local hospitals and actually implement Mediscan, increasing convenience for both doctors and patients. We want to onboard doctors and slowly roll out the application to patients and users willing to try us out.

## Accomplishments that we're proud of
We are proud of the fact that for our first major hackathon, we were able to bridge 2 different backends (for the Convolutional Neural Networks to Flask API and for the telemedicine WebRTC API to Mediscan).

## About our Data:
Our data is completely dynamic. The dataset from [CMS](https://data.cms.gov/) is updated every few weeks, so our hospital wait times are updated automatically.

## ✨Demo
For the best demo experience, visit [our site](https://mediscan.care) :)

[Demo Video](https://www.youtube.com/watch?v=gA-RCKCkT0I)

##🚀Website Tech Stack
- ✅ **Bootstrapping**: [create-t3-app](https://create.t3.gg).
- ✅ **Framework**: [NextJS 14](https://nextjs.org/) + [Typescript](https://www.typescriptlang.org/).
- ✅ **Styling**: [TailwindCSS](https://tailwindcss.com) + [RadixUI](https://www.radix-ui.com/).
- ✅ **Animations**: [AOS](https://michalsnik.github.io/aos/) + [HeadlessUI](https://headlessui.com/).
- ✅ **Component Library**: [shadcn/ui](https://ui.shadcn.com/).
- ✅ **Initial Landing Page Template**: [Cruip](https://cruip.com/).
- ✅ **Database**: [MongoDB](https://www.mongodb.com/).
- ✅ **Schema Validation**: [Zod](https://zod.dev/).
- ✅ **File Uploads**: [Uploadthing](https://uploadthing.com/).
- ✅ **Data Caching**: [Redis](https://redis.com/) + [Upstash](https://upstash.com/).
- ✅ **Medical Data**: [Centers for Medicare and Medicaid Services](https://data.cms.gov/).
- ✅ **Reverse Geocoding APIs**: [Opencage](https://opencagedata.com/) + [Geonames](https://www.geonames.org/export/web-services.html).
- ✅ **Geocoding APIs**: [Google Maps](https://developers.google.com/maps) + [MapBox Geocoding](https://docs.mapbox.com/api/search/geocoding/).
- ✅ **Map Renderer**: [MapBox Maps](https://www.mapbox.com/maps).
- ✅ **Hosting**: [Vercel](https://vercel.com/).

##🤖AI Model Tech Stack
- ✅ **Language**: [Python](https://www.python.org/).
- ✅ **ML Library**: [Tensorflow](https://www.tensorflow.org/).
- ✅ **Datasets**: [Kaggle](https://www.kaggle.com/).
- ✅ **Framework**: [Flask](https://flask.palletsprojects.com/en/2.0.x/) + [Gunicorn](https://gunicorn.org/).
- ✅ **Hosting**: [DigitalOcean](https://www.digitalocean.com/).

##🎥Video Server Tech Stack
- ✅ **Bootstrapping**: [create-t3-app](https://create.t3.gg).
- ✅ **Framework**: [NodeJS](https://nodejs.org/en) + [Typescript](https://www.typescriptlang.org/).
- ✅ **Hosting**: [DigitalOcean](https://www.digitalocean.com/).
- ✅ **WebSockets**: [Socket.IO](https://socket.io/).
- ✅ **Video Communication**: [WebRTC](https://webrtc.org/) + [PeerJS](https://peerjs.com/).

## Live URL For Video Server
https://video.mediscan.care/


## Contributors:
[Navin Narayanan](https://github.com/navincodesalot), [Rachit Patel](https://github.com/richp16), [Rishi Madhavan](https://github.com/RishiMadhavan-ui), and [Vivek Maddineni](https://github.com/Viverino1)
