import { defineStore } from "pinia"

export const useTagsViewStore = defineStore("tagsView", {
  state: () => ({
    visitedViews: [],
    cachedViews: []
  }),
  actions: {
    addView(view) {
      this.addVisitedView(view)
      this.addCachedView(view)
    },
    async delView(view) {
      this.delCachedView(view)
      this.delVisitedView(view)
      return {
        visitedViews: [...this.visitedViews],
        cachedViews: [...this.cachedViews]
      }
    },
    addVisitedView(view) {
      if (this.visitedViews.some((v) => v.path === view.path)) return

      this.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta.title || "no-name"
        })
      )
    },
    addCachedView(view) {
      if (this.cachedViews.includes(view.name)) return
      if (!view.meta.noCache) {
        this.cachedViews.push(view.name)
      }
    },
    async delOthersViews(view) {
      this.visitedViews = this.visitedViews.filter((v) => {
        return v.meta.affix || v.path === view.path
      })
      const index = this.cachedViews.indexOf(view.name)
      if (index > -1) {
        this.cachedViews = this.cachedViews.slice(index, index + 1)
      } else {
        // if index = -1, there is no cached tags
        this.cachedViews = []
      }

      return {
        visitedViews: [...this.visitedViews],
        cachedViews: [...this.cachedViews]
      }
    },
    async delAllViews() {
      const affixTags = this.visitedViews.filter((tag) => tag.meta.affix)
      this.visitedViews = affixTags
      this.cachedViews = []
      return {
        visitedViews: [...this.visitedViews],
        cachedViews: [...this.cachedViews]
      }
    },
    delVisitedView(view) {
      for (const [i, v] of this.visitedViews.entries()) {
        if (v.path === view.path) {
          this.visitedViews.splice(i, 1)
          break
        }
      }
    },
    async delCachedView(view) {
      const index = this.cachedViews.indexOf(view.name)
      index > -1 && this.cachedViews.splice(index, 1)
      return this.cachedViews
    }
  }
})
