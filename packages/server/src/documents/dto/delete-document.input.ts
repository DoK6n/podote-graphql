import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { RestoreDocumentInput } from './restore-document.input';

@InputType()
export class DeleteDocumentInput extends PartialType(RestoreDocumentInput) {}
