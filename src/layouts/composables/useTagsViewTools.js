// import { useTagsViewStore } from "../../stores/modules/tagsView"

// // todos

// export function useTagsViewTools() {
//   const tagsView = useTagsViewStore()

//   function moveToCurrentTag() {
//     const tags = $refs.tag
//     $nextTick(() => {
//       for (const tag of tags) {
//         if (tag.to.path === $route.path) {
//           $refs.scrollPane.moveToTarget(tag)
//           // when query is different then update
//           if (tag.to.fullPath !== $route.fullPath) {
//             tagsView.updateVisitedView($route)
//           }
//           break
//         }
//       }
//     })
//   }

//   function refreshSelectedTag(view) {
//     tagsView.delCachedView(view).then(() => {
//       const { fullPath } = view
//       $nextTick(() => {
//         $router.replace({
//           path: "/redirect" + fullPath
//         })
//       })
//     })
//   }

//   function closeSelectedTag(view) {
//     tagsView.delView(view).then(({ visitedViews }) => {
//       if (isActive(view)) {
//         toLastView(visitedViews, view)
//       }
//     })
//   }
//   function closeOthersTags() {
//     $router.push(selectedTag)
//     tagsView.delOthersViews(selectedTag).then(() => {
//       moveToCurrentTag()
//     })
//   }

//   function closeAllTags(view) {
//     tagsView.delAllViews().then(({ visitedViews }) => {
//       if (affixTags.some((tag) => tag.path === view.path)) {
//         return
//       }
//       toLastView(visitedViews, view)
//     })
//   }

//   function toLastView(visitedViews, view) {
//     const latestView = visitedViews.slice(-1)[0]
//     if (latestView) {
//       $router.push(latestView.fullPath)
//     } else {
//       // now the default is to redirect to the home page if there is no tags-view,
//       // you can adjust it according to your needs.
//       if (view.name === "Dashboard") {
//         // to reload home page
//         $router.replace({ path: "/redirect" + view.fullPath })
//       } else {
//         $router.push("/")
//       }
//     }
//   }
//   return {
//     closeSelectedTag,
//     closeOthersTags,
//     refreshSelectedTag,
//     moveToCurrentTag,
//     closeAllTags
//   }
// }
