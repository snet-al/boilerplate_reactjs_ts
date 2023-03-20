import React from 'react'
import { Card, Tabs, Input, Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import {useScrape} from "../../services/scrape";

// const onSearch = (value: string) => console.log(value)


export const Dashboard: React.FC = () => {
  const { mutate: scrapeUrl, isLoading, result } = useScrape()

  const onStartScrape = () => {
    scrapeUrl({ url: '', selector: '' })
  }

  return (
    <>
    <Tabs
      defaultActiveKey='1'
      tabBarGutter={100}
      style={{ width: '880px' }}
      items={[
        {
          label: `Search for tags`,
          key: '1',
          children: (
            <div style={{ display: 'flex', marginRight: '30px' }}>
              <div>
                <Card size='small' title='Configure the search: ' style={{ width: 300 }}>
                  <Input placeholder={'example: div > .class #id'} style={{ marginBottom: 20 }} />
                  <Button onClick={onStartScrape} type='primary' icon={<DownloadOutlined />} size={'small'}>
                    Start
                  </Button>
                </Card>
              </div>
              <Card size='small' title='Results:' style={{ width: 500, height: 500, marginLeft: '5rem' }}>
                {isLoading && result}
              </Card>
            </div>
          ),
        },
        {
          label: `Advanced search`,
          key: '2',
          children: `In progress ...`,
        },
        {
          label: `Settings`,
          key: '3',
          children: `In progress ...`,
        },
      ]}
    />
  </>
  )
}
