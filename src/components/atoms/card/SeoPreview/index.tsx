import React from 'react';
import Link from 'next/link';
// components
import NonFavicon from '@atom/icons/NonFavicon';
import CpuChipLoader from '@atom/loader/CpuChip';
import {
  Col,
  Header,
  Favicon,
  Url,
  RootWrap,
  Description,
  Body,
} from './style';

interface reqData {
  data?: {
    title: string;
    description: string;
    image: string;
    favicon: string;
    url: string;
  };
  mUrl: string;
}
interface props extends reqData {
  loading: boolean;
}

const Loaded = ({ data, mUrl }: reqData) => {
  if (data === undefined) return <></>;
  const { title, description, favicon, image } = data;
  return (
    <>
      <Header>
        <Favicon>
          {favicon ? (
            <img src={favicon.replace('hapas.io', 'hyeon.pro')} alt="" />
          ) : (
            <NonFavicon />
          )}
        </Favicon>
        <div>{title}</div>
      </Header>
      <Body>
        <Col.Content col>
          <Description>{description}</Description>
          <Url>{mUrl}</Url>
        </Col.Content>
        {image && (
          <Col.Image col={12} sm={4}>
            <img src={image} />
          </Col.Image>
        )}
      </Body>
    </>
  );
};

const Loading = () => (
  <>
    <Header>
      <Favicon>
        <NonFavicon />
      </Favicon>
      <div>Loading...</div>
    </Header>
    <Body.Loading>
      <CpuChipLoader />
    </Body.Loading>
  </>
);

const SeoPreviewCard = ({ data, loading, mUrl }: props) => {
  return (
    <Link href={mUrl}>
      <RootWrap>
        {!loading ? <Loaded data={data} mUrl={mUrl} /> : <Loading />}
      </RootWrap>
    </Link>
  );
};

export default SeoPreviewCard;
