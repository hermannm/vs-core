/******************************************************************************
 * This file was generated by langium-cli 0.2.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { AstNode, AstReflection, Reference, isAstNode } from 'langium';

export interface BoundDefinition extends AstNode {
    endPoint: boolean
    startPoint: boolean
}

export const BoundDefinition = 'BoundDefinition';

export function isBoundDefinition(item: unknown): item is BoundDefinition {
    return reflection.isInstance(item, BoundDefinition);
}

export interface ClassCrossReference extends AstNode {
    boundDefinition: boolean
    classReference: Reference<EcoreClass>
}

export const ClassCrossReference = 'ClassCrossReference';

export function isClassCrossReference(item: unknown): item is ClassCrossReference {
    return reflection.isInstance(item, ClassCrossReference);
}

export interface EcoreClass extends AstNode {
    readonly $container: EcoreModel;
    class: 'class'
    features: Array<EcoreFeature>
    interface: 'interface'
    name: string
    parentClass?: Reference<EcoreClass>
    references: Array<EcoreReference>
}

export const EcoreClass = 'EcoreClass';

export function isEcoreClass(item: unknown): item is EcoreClass {
    return reflection.isInstance(item, EcoreClass);
}

export interface EcoreDefinition extends AstNode {
    readonly $container: EcoreModel;
    name: string
    properties: string
}

export const EcoreDefinition = 'EcoreDefinition';

export function isEcoreDefinition(item: unknown): item is EcoreDefinition {
    return reflection.isInstance(item, EcoreDefinition);
}

export interface EcoreEnum extends AstNode {
    readonly $container: EcoreModel;
    enumEntry: Array<EcoreEnumEntry>
    name: string
}

export const EcoreEnum = 'EcoreEnum';

export function isEcoreEnum(item: unknown): item is EcoreEnum {
    return reflection.isInstance(item, EcoreEnum);
}

export interface EcoreEnumEntry extends AstNode {
    readonly $container: EcoreEnum;
    amgiousDefintion: boolean
    name: string
    numberDefinition: boolean
    stringDefinition: boolean
}

export const EcoreEnumEntry = 'EcoreEnumEntry';

export function isEcoreEnumEntry(item: unknown): item is EcoreEnumEntry {
    return reflection.isInstance(item, EcoreEnumEntry);
}

export interface EcoreFeature extends AstNode {
    readonly $container: EcoreClass;
    boundDefinnition: boolean
    featureName: string
    name: string
    required: boolean
}

export const EcoreFeature = 'EcoreFeature';

export function isEcoreFeature(item: unknown): item is EcoreFeature {
    return reflection.isInstance(item, EcoreFeature);
}

export interface EcoreModel extends AstNode {
    classes: Array<EcoreClass>
    definitions: Array<EcoreDefinition>
    enums: Array<EcoreEnum>
    name: EcoreModelDefinition
    nsUri: boolean
}

export const EcoreModel = 'EcoreModel';

export function isEcoreModel(item: unknown): item is EcoreModel {
    return reflection.isInstance(item, EcoreModel);
}

export interface EcoreModelDefinition extends AstNode {
    readonly $container: EcoreModel;
    name: string
}

export const EcoreModelDefinition = 'EcoreModelDefinition';

export function isEcoreModelDefinition(item: unknown): item is EcoreModelDefinition {
    return reflection.isInstance(item, EcoreModelDefinition);
}

export interface EcoreReference extends AstNode {
    readonly $container: EcoreClass;
    containmentType: 'Container' | 'Containment'
    name: string
}

export const EcoreReference = 'EcoreReference';

export function isEcoreReference(item: unknown): item is EcoreReference {
    return reflection.isInstance(item, EcoreReference);
}

export interface NsUriDeclaration extends AstNode {
    name: string
}

export const NsUriDeclaration = 'NsUriDeclaration';

export function isNsUriDeclaration(item: unknown): item is NsUriDeclaration {
    return reflection.isInstance(item, NsUriDeclaration);
}

export type VsCoreAstType = 'BoundDefinition' | 'ClassCrossReference' | 'EcoreClass' | 'EcoreDefinition' | 'EcoreEnum' | 'EcoreEnumEntry' | 'EcoreFeature' | 'EcoreModel' | 'EcoreModelDefinition' | 'EcoreReference' | 'NsUriDeclaration';

export type VsCoreAstReference = 'ClassCrossReference:classReference' | 'EcoreClass:parentClass';

export class VsCoreAstReflection implements AstReflection {

    getAllTypes(): string[] {
        return ['BoundDefinition', 'ClassCrossReference', 'EcoreClass', 'EcoreDefinition', 'EcoreEnum', 'EcoreEnumEntry', 'EcoreFeature', 'EcoreModel', 'EcoreModelDefinition', 'EcoreReference', 'NsUriDeclaration'];
    }

    isInstance(node: unknown, type: string): boolean {
        return isAstNode(node) && this.isSubtype(node.$type, type);
    }

    isSubtype(subtype: string, supertype: string): boolean {
        if (subtype === supertype) {
            return true;
        }
        switch (subtype) {
            default: {
                return false;
            }
        }
    }

    getReferenceType(referenceId: VsCoreAstReference): string {
        switch (referenceId) {
            case 'ClassCrossReference:classReference': {
                return EcoreClass;
            }
            case 'EcoreClass:parentClass': {
                return EcoreClass;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }
}

export const reflection = new VsCoreAstReflection();
