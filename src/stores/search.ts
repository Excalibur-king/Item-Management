import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { SearchList, TagList } from '@/types/search'

export const useSearchStore = defineStore('search', () => {
  const currentSearchList: SearchList = reactive({
    currentPage: 0,
    total: 10,
    tagsList: [
      {
        id: 1,
        tag: '帽子'
      },
      {
        id: 2,
        tag: '衣柜'
      },
      {
        id: 3,
        tag: '手包'
      },
      {
        id: 4,
        tag: '牛仔裤'
      },
      {
        id: 5,
        tag: '书柜'
      }
    ],
    searchList: [
      {
        id: '1',
        name: '帽子',
        properties: 1,
        state: '在库',
        previewImg: '/static/cap.png',
        dependentSpace: '房子1->卧室->衣柜'
      },
      {
        id: '2',
        name: '衣柜',
        properties: 0,
        state: '五成新',
        previewImg: '/static/cap.png',
        dependentSpace: '房子1->卧室'
      },
      {
        id: '3',
        name: '手包',
        properties: 1,
        previewImg: '/static/cap.png',
        dependentSpace: '房子1->卧室->衣柜'
      },
      {
        id: '4',
        name: '牛仔裤',
        properties: 1,
        previewImg: '/static/cap.png',
        dependentSpace: '房子1->卧室->衣柜'
      },
      {
        id: '5',
        name: '书柜',
        properties: 0,
        previewImg: '/static/cap.png',
        dependentSpace: '房子1->卧室'
      },
      {
        id: '6',
        name: '牛仔裤1',
        properties: 1,
        previewImg: '/static/cap.png',
        dependentSpace: '房子1->卧室->衣柜'
      },
      {
        id: '7',
        name: '洗手间',
        properties: 0,
        previewImg: '/static/cap.png',
        dependentSpace: '房子1->卧室->衣柜'
      },
      {
        id: '8',
        name: '牛仔裤2',
        properties: 1,
        previewImg: '/static/cap.png',
        dependentSpace: '房子1->卧室->衣柜'
      },
      {
        id: '9',
        name: '牛仔裤3',
        properties: 0,
        previewImg: '/static/cap.png',
        dependentSpace: '房子1->卧室->衣柜'
      },
      {
        id: '10',
        name: '牛仔裤4',
        properties: 0,
        previewImg: '/static/cap.png',
        dependentSpace: '房子1->卧室->衣柜'
      }
    ]
  })

  function setTagsList(tagList: TagList[]) {
    tagList.forEach((value) => {
      value.checked = false
    })
  }

  function fetchNewSearchList() {
    // 请求新的物品列表，存入 store
  }

  function fetchScreenSearchList() {
    // 发送筛选要求，存入 store
  }

  return {
    currentSearchList,
    setTagsList,
    fetchNewSearchList,
    fetchScreenSearchList
  }
})