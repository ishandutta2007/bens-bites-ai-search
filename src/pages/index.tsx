import * as React from 'react'

import { Layout } from '@/components/Layout/Layout'
import { PageHead } from '@/components/PageHead/PageHead'
import { SearchOptions } from '@/components/SearchOptions/SearchOptions'
import { SearchResults } from '@/components/SearchResults/SearchResults'
import { Search } from '@/lib/hooks/search'

import styles from './index.module.css'

export default function HomePage() {
  return (
    <Layout>
      <PageHead />

      <div className={styles.page}>
        <div className={styles.body}>
          <Search.Provider>
            <SearchOptions />

            <SearchResults />
          </Search.Provider>
        </div>
      </div>
    </Layout>
  )
}
