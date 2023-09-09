# TikShop Connect with Personalised Shopping Profiles and Shopping Boards 

## Brief biography of our members  
Hello TikTok fans! We are a group of sophomores from NUS Computing, all majoring in Information Systems. We joined this hackathon as part of our ongoing journey of seeking something new and interesting to try, and we hope to learn more through this project while also contributing ideas towards improving TikTok's user experience.
 
## Inspiration  
The inspiration for TikShop Connect came from our members using the TikTok shopping feature and finding it difficult to share their favourite items to their friends. Currently, they would have to individually share the product listing via TikTok chats or share the link via other communication platforms.

### User Stories     
Imagine a TikTok user, Rachel, who is an avid fashion enthusiast. She frequently scrolls through TikTok Shop and her TikTok For You Page to discover new clothing trends and she likes finding brands endorsed by her favourite influencers. However, Rachel finds it troublesome to share her favourite items with her friends as she has to message them about it on a separate chatbox. Rachel wishes the TikTok shop function could be more social and allow for **more interaction** between her friends and her favourite influencers. Rachel also wishes there was a **centralised space for her to view all the items** liked by her favourite influencers, without having to endlessly scroll through videos.

## What it does      
Our solution is to create a personalised TikTok shop profile embedded into the current TikTok profile for users based on a short quiz. The quiz will ask users for their **style preferences**, **favourite users from the list they are following**, their **sizing**, **favourite brands**. After the quiz, users can find people with similar interests through hashtags and follow their favourites/wishlist page for more inspiration. The user’s profile page will also have an additional “Shopping Pins” tab where they can create folders to collate their favourite products. These folders can be shared with their friends who can also add products. Followers can easily buy whichever products they like through the “Shopping Pins” tab.

### How we built it     
#### Software Engineering Methodology

Our primary software engineering approach is the **Waterfall Model**. Although an iterative and incremental method like Agile could be more advantageous, the limited timeframe makes it impractical for us to constantly adjust and respond to changing conditions. Consequently, we **require a more organised and inflexible system to be established**.

Visual illustration of the Waterfall Model - https://t3.ftcdn.net/jpg/04/86/69/10/360_F_486691061_PMoiYbT9xGZ5nxUJzDU1pqsAsgxnRw2o.jpg 

##### **Some of the secondary approach we adopted are :**

**Version Control :** We used version control systems like Git, which allow us to track changes to code, collaborate effectively, and easily revert to previous versions if needed.

**Code Reviews :** We also adopt the habit of regularly reviewing our code together as a team to assess for bugs, adherence to coding standards, and overall quality. This practice helps us identify issues early and maintain code quality.

**Adhering to the KISS Principle :** The principle stands for “Keep It Short and Simple”. We strongly adhere to this design principle, keeping our code as simple as possible. This approach allows us to avoid unnecessary complexity, making the code easier to understand, maintain, and debug.

#### **Tech Stack and Features**      
Tech Stack used : HTML, CSS, typescript, Angular , Ionic Framework, Github

Our features are built **using Ionic Framework and Angular for the front-end user interface**. We simulated a user’s TikTok profile page on an Android phone, and incorporated our “Shopping Pins” feature as an additional profile tab. The shop profile quiz is included as a separate button on the profile page called “Create Shop Profile”, and we intended to store the user’s quiz answers into a **database such as Firebase** in our future implementations.

#### **GitHub Management**    
In our project, we utilised GitHub for version control and we chose to adopt the branching workflow as our collaborative approach.

GitHub served as our primary collaboration platform during the development of our project. While using branches and pull requests for most of our work, in cases where conflicts arose during the merging process, we opted to convene and resolve the conflicts collectively. Our aim was to ensure a smooth and error-free merging process.

Once we were confident that our code was ready for deployment, we performed a push to the side branch before merging it. This approach allowed us to maintain a clean and stable main branch, representing the most recent and deployable version of our project.

## Challenges we ran into
Our original concept involved using a quiz to create a personalised TikTok Shop profile for users. However, we encountered difficulties when attempting to develop this profile within the constraints of our limited time frame. Given additional time and resources, our plan was to harness the power of **Machine Learning technology** to generate a **truly distinctive and customised TikTok Shop profile for each user.** This advanced approach would involve analysing users' quiz responses and utilising machine learning algorithms to understand their preferences, interests, and behaviours. By doing so, we aimed to provide users with a highly tailored shopping experience that would not only showcase products aligned with their interests but also help them connect with others who shared similar passions and preferences. Essentially, it would have been a more sophisticated and data-driven approach to enhancing user engagement and personalization within the TikTok Shop platform.

## Accomplishments that we're proud of  
We take great pride in the successful implementation of our "Shopping Pins" concept. We have effectively transformed our initial idea, which was just a concept on paper, into a tangible feature integrated into a sample TikTok user's profile. **This accomplishment reflects our team's dedication and effort in turning an abstract idea into a practical and functional reality.** We are excited about the potential of this implementation and the value it can bring to TikTok users by enhancing their shopping experience and making it more engaging and personalised.

We also take immense pride in the User Interface (UI) we've created for our "Shopping Pins" feature. Our team dedicated substantial time and effort to meticulously design an interface that not only looks visually appealing but also ensures a user-friendly experience that seamlessly fits within the TikTok platform

## What we learned 
Given that the majority of our team members were unfamiliar with the Ionic Framework, we essentially began our project with limited prior knowledge. However, within the tight time frame, we managed to acquire valuable insights and expertise in utilising this framework to develop a mobile application.

Several team members also had the opportunity to delve into HTML and CSS, with some being relatively new to creating a UI platform for mobile app development. Through this experience, we've been able to embrace and develop a fundamental proficiency in these languages.

## What's next for TikShop Connect 
As the quiz collects data about users' preferences, TikTok can leverage this information to execute personalized marketing strategies and suggest new products to users. Additionally, users have the option to access and share their collaborative pin boards and even group-purchase items from their friends' wishlists.

**We sincerely hope that TikTok finds inspiration in our ideas and considers implementing them to enhance the platform's overall functionality and user experience.**

