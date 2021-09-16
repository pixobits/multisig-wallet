import React from "react";
import { PageHeader } from "antd";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/enepti/multisig-wallet" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="Multisig Wallet"
        subTitle="meta-multi-sig example"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
