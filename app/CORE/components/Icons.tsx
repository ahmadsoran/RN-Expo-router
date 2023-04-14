import React from "react";
import NotificationIcon from "react-native-remix-icon/src/icons/Notification3Line";
import SettingIcon from "react-native-remix-icon/src/icons/Settings4Line";
import FileTwo from "react-native-remix-icon/src/icons/File2Line";
import FileListTwo from "react-native-remix-icon/src/icons/FileList2Line";
import FileListThree from "react-native-remix-icon/src/icons/FileList3Line";
import ShoppingBagThree from "react-native-remix-icon/src/icons/ShoppingBag3Line";
import HistoryIcon from "react-native-remix-icon/src/icons/HistoryLine";
import HomeIcon from "react-native-remix-icon/src/icons/Home3Line";
import CoinsIcon from "react-native-remix-icon/src/icons/CoinsLine";
import BankCardTwo from "react-native-remix-icon/src/icons/BankCard2Line";
import SimCardTwoIcon from "react-native-remix-icon/src/icons/SimCard2Line";
import SimCardIcon from "react-native-remix-icon/src/icons/SimCardLine";
import BarCodeBoxIcon from "react-native-remix-icon/src/icons/BarcodeBoxLine";
import ListUnorderedIcon from "react-native-remix-icon/src/icons/ListUnordered";
import BuildingIcon from "react-native-remix-icon/src/icons/BuildingLine";
import TranslateIcon from "react-native-remix-icon/src/icons/Translate";
import EditIcon from "react-native-remix-icon/src/icons/EditLine";
import PaintIcon from "react-native-remix-icon/src/icons/PaintLine";
import FileChartIcon from "react-native-remix-icon/src/icons/FileChartLine";
import ArrowGobackIcon from "react-native-remix-icon/src/icons/ArrowGoBackLine";
import InformationIcon from "react-native-remix-icon/src/icons/InformationLine";
import UserTwoIcon from "react-native-remix-icon/src/icons/User2Line";
import UserIcon from "react-native-remix-icon/src/icons/UserLine";
import PhoneIcon from "react-native-remix-icon/src/icons/PhoneLine";
import DeleteBinIcon from "react-native-remix-icon/src/icons/DeleteBinLine";
import { RFValue } from "react-native-responsive-fontsize";
import Layout from "CORE/constants/Layout";
export const NotificationICON = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  size = RFValue(size, Layout.window.height);
  return <NotificationIcon width={size} height={size} fill={color} />;
};

export const SettingICON = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  size = RFValue(size, Layout.window.height);
  return <SettingIcon width={size} height={size} fill={color} />;
};

export const File2ICON = ({ color, size }: { color: string; size: number }) => {
  size = RFValue(size, Layout.window.height);
  return <FileTwo width={size} height={size} fill={color} />;
};
export const FileList2ICON = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  size = RFValue(size, Layout.window.height);
  return <FileListTwo width={size} height={size} fill={color} />;
};

export const FileList3ICON = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  size = RFValue(size, Layout.window.height);
  return <FileListThree width={size} height={size} fill={color} />;
};
export const ShoppingBag3ICON = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  size = RFValue(size, Layout.window.height);
  return <ShoppingBagThree width={size} height={size} fill={color} />;
};
export const HistoryICON = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  size = RFValue(size, Layout.window.height);
  return <HistoryIcon width={size} height={size} fill={color} />;
};
export const HomeICON = ({ color, size }: { color: string; size: number }) => {
  size = RFValue(size, Layout.window.height);
  return <HomeIcon width={size} height={size} fill={color} />;
};

export const CridetICON = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  size = RFValue(size, Layout.window.height);
  return <CoinsIcon width={size} height={size} fill={color} />;
};
export const ScratchCardICON = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  size = RFValue(size, Layout.window.height);
  return <BankCardTwo width={size} height={size} fill={color} />;
};
export const EsimICON = ({ color, size }: { color: string; size: number }) => {
  size = RFValue(size, Layout.window.height);
  return <SimCardTwoIcon width={size} height={size} fill={color} />;
};
export const SimCardICON = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  size = RFValue(size, Layout.window.height);
  return <SimCardIcon width={size} height={size} fill={color} />;
};
export const EvoucherICON = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  size = RFValue(size, Layout.window.height);
  return <BarCodeBoxIcon width={size} height={size} fill={color} />;
};
export const ListUnorderedICON = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  size = RFValue(size, Layout.window.height);
  return <ListUnorderedIcon width={size} height={size} fill={color} />;
};
export const BuildingICON = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  size = RFValue(size, Layout.window.height);
  return <BuildingIcon width={size} height={size} fill={color} />;
};
export const TraslateICON = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  size = RFValue(size, Layout.window.height);
  return <TranslateIcon width={size} height={size} fill={color} />;
};
export const EditICON = ({ color, size }: { color: string; size: number }) => {
  size = RFValue(size, Layout.window.height);
  return <EditIcon width={size} height={size} fill={color} />;
};
export const PaintICON = ({ color, size }: { color: string; size: number }) => {
  size = RFValue(size, Layout.window.height);
  return <PaintIcon width={size} height={size} fill={color} />;
};
export const FileChartICON = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  size = RFValue(size, Layout.window.height);
  return <FileChartIcon width={size} height={size} fill={color} />;
};

export const ArrowGobackICON = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  size = RFValue(size, Layout.window.height);
  return <ArrowGobackIcon width={size} height={size} fill={color} />;
};

export const InformationICON = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  size = RFValue(size, Layout.window.height);
  return <InformationIcon width={size} height={size} fill={color} />;
};

export const User2ICON = ({ color, size }: { color: string; size: number }) => {
  size = RFValue(size, Layout.window.height);
  return <UserTwoIcon width={size} height={size} fill={color} />;
};
export const UserICON = ({ color, size }: { color: string; size: number }) => {
  size = RFValue(size, Layout.window.height);
  return <UserIcon width={size} height={size} fill={color} />;
};

export const PhoneICON = ({ color, size }: { color: string; size: number }) => {
  size = RFValue(size, Layout.window.height);
  return <PhoneIcon width={size} height={size} fill={color} />;
};

export const DeleteBinICON = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => {
  size = RFValue(size, Layout.window.height);
  return <DeleteBinIcon width={size} height={size} fill={color} />;
};
