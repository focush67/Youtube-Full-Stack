<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">YOUTUBE-FULL-STACK</h1>
</p>
<p align="center">
    <em>A full stack youtube clone</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/focush67/Youtube-Full-Stack?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/focush67/Youtube-Full-Stack?style=flat&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/focush67/Youtube-Full-Stack?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/focush67/Youtube-Full-Stack?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<br>
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat&logo=Prisma&logoColor=white" alt="Prisma">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running Youtube-Full-Stack](#-running-Youtube-Full-Stack)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

## Overview

This app uses cloudinary to store the videos for the regsitered users who have created a channel , and utilizes the power of NextJS and TypeScript for efficient, type safe and verbose code implementation

---

## Repository Structure

```sh
└── Youtube-Full-Stack/
    ├── .eslintrc.json
    ├── CustomHooks
    │   ├── useComment.ts
    │   ├── useLikeDislike.ts
    │   ├── useProtectedRoute.ts
    │   └── useSubscribe.ts
    ├── app
    │   ├── (routes)
    │   │   ├── channel
    │   │   ├── search
    │   │   ├── studio
    │   │   ├── subscriptions
    │   │   └── video
    │   ├── api
    │   │   ├── auth
    │   │   ├── channels
    │   │   ├── comments
    │   │   ├── users
    │   │   └── videos
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components
    │   ├── channel
    │   │   └── ChannelHeader.tsx
    │   ├── shared
    │   │   ├── Button.tsx
    │   │   ├── IconButton.tsx
    │   │   ├── Input.tsx
    │   │   ├── Logo.tsx
    │   │   ├── MediaUpload.tsx
    │   │   ├── Modals
    │   │   ├── Navigation
    │   │   ├── SubscribeButton.tsx
    │   │   ├── TextArea.tsx
    │   │   ├── UserAvatar.tsx
    │   │   └── VideoCard.tsx
    │   ├── studio
    │   │   ├── AnalyticsSummary.tsx
    │   │   ├── AnalyticsSummaryItems.tsx
    │   │   ├── VideoDetailsCard.tsx
    │   │   └── upload
    │   ├── subscriptions
    │   │   └── Subscriptions.tsx
    │   └── video
    │       ├── CommentSection
    │       ├── Description.tsx
    │       ├── LikeAndSubscribe
    │       └── VideoPlayer.tsx
    ├── contexts
    │   ├── CreateChannelContext.tsx
    │   ├── CurrentChannelContext.tsx
    │   ├── CurrentUserContext.tsx
    │   ├── SidebarContext.tsx
    │   └── UploadVideoModalContext.tsx
    ├── getChannelById.ts
    ├── getCommentsByVideoId.ts
    ├── getCurrentChannel.ts
    ├── getCurrentSubscriptions.ts
    ├── getCurrentUser.ts
    ├── getRecommendedVideos.ts
    ├── getTrendingVideos.ts
    ├── getVideosByChannelld.ts
    ├── getVideosOfSubscriptions.ts
    ├── increaseVideoViewCount.ts
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── prisma
    │   └── schema.prisma
    ├── public
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── utilities
    │   ├── Num.ts
    │   └── authExports.ts
    └── vendor
        ├── database.ts
        └── dayjs.ts
```

---

## Modules

<details closed><summary>.</summary>

| File                                                                                                                  | Summary                                                                   |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [getTrendingVideos.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/getTrendingVideos.ts)               | Utility made to fetch trending videos |
| [getVideosOfSubscriptions.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/getVideosOfSubscriptions.ts) | Utility made to fetch all the videos of the subscriptions the current user has |
| [getCurrentChannel.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/getCurrentChannel.ts)               | Utility made to fetch details of the current channel |
| [getCommentsByVideoId.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/getCommentsByVideoId.ts)         | Utility made to fetch all the comments that are on the video with the given video id |
| [package-lock.json](https://github.com/focush67/Youtube-Full-Stack/blob/master/package-lock.json)                     |  |
| [next.config.js](https://github.com/focush67/Youtube-Full-Stack/blob/master/next.config.js)                           | |
| [tailwind.config.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/tailwind.config.ts)                   | Tailwind Configuration File |
| [increaseVideoViewCount.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/increaseVideoViewCount.ts)     | Utility made to increase the views of the current video |
| [getRecommendedVideos.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/getRecommendedVideos.ts)         | Utility made to get recommended videos |
| [getCurrentUser.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/getCurrentUser.ts)                     | Utility made to fetch the current signed in user |
| [getVideosByChannelld.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/getVideosByChannelld.ts)         | Utility made to fetch all videos of the channel with the given id|
| [package.json](https://github.com/focush67/Youtube-Full-Stack/blob/master/package.json)                               | |
| [getCurrentSubscriptions.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/getCurrentSubscriptions.ts)   |   Utility made to fetch current subscriptions of the user|
| [postcss.config.js](https://github.com/focush67/Youtube-Full-Stack/blob/master/postcss.config.js)                     | |
| [getChannelById.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/getChannelById.ts)                     | Utility designed to fetch the channel details with the given channel id |

</details>

<details closed><summary>components.studio</summary>

| File                                                                                                                                | Summary                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [AnalyticsSummaryItems.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/studio/AnalyticsSummaryItems.tsx) | Useful to fetch the analytics page for the current channel |
| [VideoDetailsCard.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/studio/VideoDetailsCard.tsx)           | Used for rendering the details of the video |
| [AnalyticsSummary.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/studio/AnalyticsSummary.tsx)           | Fetches summary for the analytics |

</details>

<details closed><summary>components.studio.upload</summary>

| File                                                                                                                           | Summary                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| [VideoUploadForm.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/studio/upload/VideoUploadForm.tsx) | Form component useful in uploading the video to cloudinary |
| [VideoPreview.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/studio/upload/VideoPreview.tsx)       | Fetches video preview |

</details>

<details closed><summary>components.channel</summary>

| File                                                                                                                 | Summary                                                                   |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [ChannelHeader.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/channel/ChannelHeader.tsx) | Component for channel header|

</details>

<details closed><summary>components.subscriptions</summary>

| File                                                                                                                       | Summary                                                                   |
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [Subscriptions.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/subscriptions/Subscriptions.tsx) | Component used to render the subscriptions for the current user with an existing channel|

</details>

<details closed><summary>components.video</summary>

| File                                                                                                           | Summary                                                                   |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [VideoPlayer.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/video/VideoPlayer.tsx) | Player component which takes a video id and plays the corresponding video |
| [Description.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/video/Description.tsx) | Component for fetching the video's description being played |

</details>

<details closed><summary>components.video.LikeAndSubscribe</summary>

| File                                                                                                                                        | Summary                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [LikeSubscribe.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/video/LikeAndSubscribe/LikeSubscribe.tsx)         | Component for subscribing to a channel |
| [LikeDislikeButton.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/video/LikeAndSubscribe/LikeDislikeButton.tsx) | Used to toggle between like and dislike (if the video is liked , it can be disliked and vice-versa) |

</details>

<details closed><summary>components.video.CommentSection</summary>

| File                                                                                                                              | Summary                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [Comment.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/video/CommentSection/Comment.tsx)             | Aid in designing the comment section |
| [CommentRegion.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/video/CommentSection/CommentRegion.tsx) | Aid in designing the comment section |
| [CommentInput.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/video/CommentSection/CommentInput.tsx)   | Input for comment section |

</details>

<details closed><summary>components.shared</summary>

| File                                                                                                                    | Summary                                                                   |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [Logo.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/Logo.tsx)                       | Self-Explanatory |
| [VideoCard.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/VideoCard.tsx)             | Card component for rendering video |
| [Button.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/Button.tsx)                   | Button component |
| [Input.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/Input.tsx)                     | Input component |
| [UserAvatar.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/UserAvatar.tsx)           | User avatar for rendering the channel icon |
| [TextArea.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/TextArea.tsx)               | Utility component |
| [IconButton.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/IconButton.tsx)           | Self Explanatory |
| [SubscribeButton.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/SubscribeButton.tsx) | Button to subscribe to a channel |
| [MediaUpload.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/MediaUpload.tsx)         | Component to upload media to cloudinary with a utility modal|

</details>

<details closed><summary>components.shared.Navigation</summary>

| File                                                                                                                                 | Summary                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| [NavigationHeader.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/Navigation/NavigationHeader.tsx) | Navigation component utility |
| [Navigation.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/Navigation/Navigation.tsx)             | Navigation component |

</details>

<details closed><summary>components.shared.Navigation.Navbar</summary>

| File                                                                                                                    | Summary                                                                   |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [Search.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/Navigation/Navbar/Search.tsx) | Search bar |
| [Navbar.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/Navigation/Navbar/Navbar.tsx) | Navigation bar encapsulating all the previous navigation utilities |

</details>

<details closed><summary>components.shared.Navigation.Navbar.UserOptions</summary>

| File                                                                                                                                          | Summary                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [UserMenu.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/Navigation/Navbar/UserOptions/UserMenu.tsx)       | Self-Explanatory |
| [UserOptions.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/Navigation/Navbar/UserOptions/UserOptions.tsx) | Options for user to sign in , manage channels and create channel if not already |
| [SignIn.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/Navigation/Navbar/UserOptions/SignIn.tsx)           | Sign in button |
| [MenuItems.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/Navigation/Navbar/UserOptions/MenuItems.tsx)     | Menu Items component |

</details>

<details closed><summary>components.shared.Navigation.Sidebar</summary>

| File                                                                                                                       | Summary                                                                   |
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [Sidebar.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/Navigation/Sidebar/Sidebar.tsx) | Sidebar component used to render the navigation in the form of a slide in component |

</details>

<details closed><summary>components.shared.Modals</summary>

| File                                                                                                                                 | Summary                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| [UploadVideoModal.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/Modals/UploadVideoModal.tsx)     | Modal to upload video to cloudinary |
| [CreateChannelModal.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/components/shared/Modals/CreateChannelModal.tsx) | Modal to create channel |

</details>

<details closed><summary>CustomHooks</summary>

| File                                                                                                                | Summary                                                                   |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [useSubscribe.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/CustomHooks/useSubscribe.ts)           | Hook to subscribe to a channel with an id |
| [useProtectedRoute.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/CustomHooks/useProtectedRoute.ts) | Custom hook used to check of the current app user has permission to access a particular route in which this is called |
| [useComment.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/CustomHooks/useComment.ts)               | Custom hook to create a comment |
| [useLikeDislike.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/CustomHooks/useLikeDislike.ts)       | Custom hook to toggle between like and dislike |

</details>

<details closed><summary>vendor</summary>

| File                                                                                         | Summary                                                                   |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [database.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/vendor/database.ts) | Error generating summary: HTTPStatusError occurred. See logs for details. |
| [dayjs.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/vendor/dayjs.ts)       | External library to format the date in a required format |

</details>

<details closed><summary>prisma</summary>

| File                                                                                             | Summary                                                                   |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| [schema.prisma](https://github.com/focush67/Youtube-Full-Stack/blob/master/prisma/schema.prisma) | Declaring a prisma model for mongodb |

</details>

<details closed><summary>contexts</summary>

| File                                                                                                                           | Summary                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| [CurrentUserContext.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/contexts/CurrentUserContext.tsx)           | Context for providing current user details |
| [CurrentChannelContext.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/contexts/CurrentChannelContext.tsx)     | Contex for providing the details related to the current channel for the signed in user |
| [SidebarContext.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/contexts/SidebarContext.tsx)                   | Loads sidebar details for the current user |
| [UploadVideoModalContext.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/contexts/UploadVideoModalContext.tsx) | Context to fetch details of the current video being posted |
| [CreateChannelContext.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/contexts/CreateChannelContext.tsx)       | Context to provide the channel creation information globally |

</details>

<details closed><summary>utilities</summary>

| File                                                                                                  | Summary                                                                   |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [Num.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/utilities/Num.ts)                 | Utility for formatting dates|
| [authExports.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/utilities/authExports.ts) | Export authOptions for user validation in NextAuth options|

</details>

<details closed><summary>app</summary>

| File                                                                                      | Summary                                                                   |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [globals.css](https://github.com/focush67/Youtube-Full-Stack/blob/master/app/globals.css) |  |
| [layout.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/app/layout.tsx)   | Layout file for the main page render |
| [page.tsx](https://github.com/focush67/Youtube-Full-Stack/blob/master/app/page.tsx)       | Main Page |

</details>

<details closed><summary>app.(routes).studio</summary>

| File                                                                                                  | Summary                                                                   |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/focush67/Youtube-Full-Stack/blob/master/app/(routes)/studio/page.tsx>) |Studio Component|

</details>

<details closed><summary>app.(routes).studio.upload</summary>

| File                                                                                                         | Summary                                                                   |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/focush67/Youtube-Full-Stack/blob/master/app/(routes)/studio/upload/page.tsx>) | Upload Page |

</details>

<details closed><summary>app.(routes).channel.[channelId]</summary>

| File                                                                                                               | Summary                                                                   |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/focush67/Youtube-Full-Stack/blob/master/app/(routes)/channel/[channelId]/page.tsx>) | Page to display the requested channel |

</details>

<details closed><summary>app.(routes).search</summary>

| File                                                                                                  | Summary                                                                   |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/focush67/Youtube-Full-Stack/blob/master/app/(routes)/search/page.tsx>) | Search component to search a video or a user|

</details>

<details closed><summary>app.(routes).subscriptions</summary>

| File                                                                                                         | Summary                                                                   |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/focush67/Youtube-Full-Stack/blob/master/app/(routes)/subscriptions/page.tsx>) | Subscriptions page for the current user |

</details>

<details closed><summary>app.(routes).video.[videoId]</summary>

| File                                                                                                           | Summary                                                                   |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/focush67/Youtube-Full-Stack/blob/master/app/(routes)/video/[videoId]/page.tsx>) | Video page which houses the video player , description and comments alongwith the recommended videos with the current ongoing video as reference |

</details>

<details closed><summary>app.api.channels</summary>

| File                                                                                             | Summary                                                                   |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| [route.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/app/api/channels/route.ts) | API route to handle request related to channels |

</details>

<details closed><summary>app.api.auth.[...nextauth]</summary>

| File                                                                                                       | Summary                                                                   |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [route.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/app/api/auth/[...nextauth]/route.ts) | NextAuth authentication configuration |

</details>

<details closed><summary>app.api.comments.[videoId]</summary>

| File                                                                                                       | Summary                                                                   |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [route.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/app/api/comments/[videoId]/route.ts) | API route to add comments to a video with a given video id |

</details>

<details closed><summary>app.api.videos</summary>

| File                                                                                           | Summary                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [route.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/app/api/videos/route.ts) | API route to operate on all the videos of the app |

</details>

<details closed><summary>app.api.videos.[videoId]</summary>

| File                                                                                                     | Summary                                                                   |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [route.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/app/api/videos/[videoId]/route.ts) | API endpoint for performing actions on a video with a given video id |

</details>

<details closed><summary>app.api.videos.[videoId].like</summary>

| File                                                                                                          | Summary                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [route.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/app/api/videos/[videoId]/like/route.ts) | API endpoint to handle liking a video with a given video id |

</details>

<details closed><summary>app.api.videos.[videoId].dislike</summary>

| File                                                                                                             | Summary                                                                   |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [route.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/app/api/videos/[videoId]/dislike/route.ts) | API endpoint to handle disliking a video with a given video id |

</details>

<details closed><summary>app.api.users.subscriptions</summary>

| File                                                                                                        | Summary                                                                   |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [route.ts](https://github.com/focush67/Youtube-Full-Stack/blob/master/app/api/users/subscriptions/route.ts) | API endpoint to operate on the requested users's subscriptions section |

</details>

---

## Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **TypeScript**: `version x.y.z`

### Installation

1. Clone the Youtube-Full-Stack repository:

```sh
git clone https://github.com/focush67/Youtube-Full-Stack
```

2. Change to the project directory:

```sh
cd Youtube-Full-Stack
```

3. Install the dependencies:

```sh
npm install
```

### Running Youtube-Full-Stack

Use the following command to run Youtube-Full-Stack:

```sh
npm run build && node dist/main.js
```

### Tests

To execute tests, run:

```sh
npm test
```

---

## Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github/focush67/Youtube-Full-Stack/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github/focush67/Youtube-Full-Stack/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github/focush67/Youtube-Full-Stack/issues)**: Submit bugs found or log feature requests for Youtube-full-stack.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/focush67/Youtube-Full-Stack
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

