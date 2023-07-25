export default interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'primary' | 'secondary' | 'subtle' | 'ghost';
  icon?: string | null;
  position?: 'left' | 'right';
  loading?: boolean;
}
